/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Photography Editor — Drag-and-drop canvas with edit mode toggle
 * Design and save, then lock for read-only viewing by all visitors
 */

import { useState, useRef, useEffect } from "react";
import { Trash2, Plus, Save, Download, Upload, Lock, Unlock } from "lucide-react";
import { usePhotographyLayout, type PhotoItem } from "@/hooks/usePhotographyLayout";

interface PhotographyEditorProps {
  onSave?: (photos: PhotoItem[]) => void;
}

export default function PhotographyEditor({ onSave }: PhotographyEditorProps) {
  const { photos, setPhotos, saveLayout, clearLayout, exportLayout, importLayout, isLoaded, lastSaved, isEditMode, toggleEditMode, lockLayout, unlockLayout } = usePhotographyLayout();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isEditMode) return;
    
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        const newPhoto: PhotoItem = {
          id: Math.random().toString(36).substr(2, 9),
          src,
          x: Math.random() * 100,
          y: Math.random() * 100,
          width: 200,
          height: 200,
          zIndex: photos.length,
          rotation: 0,
        };
        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        setSelectedId(newPhoto.id);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleMouseDown = (e: React.MouseEvent, photoId: string) => {
    if (!isEditMode) return;
    if (e.button !== 0) return;
    
    setSelectedId(photoId);
    setIsDragging(true);

    const photo = photos.find((p) => p.id === photoId);
    if (!photo || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left - photo.x,
      y: e.clientY - rect.top - photo.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedId || !canvasRef.current || !isEditMode) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const newX = Math.max(0, Math.min(e.clientX - rect.left - dragOffset.x, rect.width - 100));
    const newY = Math.max(0, Math.min(e.clientY - rect.top - dragOffset.y, rect.height - 100));

    setPhotos(
      photos.map((p) =>
        p.id === selectedId ? { ...p, x: newX, y: newY } : p
      )
    );
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updatePhoto = (id: string, updates: Partial<PhotoItem>) => {
    if (!isEditMode) return;
    setPhotos(photos.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  const deletePhoto = (id: string) => {
    if (!isEditMode) return;
    setPhotos(photos.filter((p) => p.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleSaveLayout = () => {
    const success = saveLayout();
    if (success) {
      setSaveMessage("Layout saved successfully!");
      setTimeout(() => setSaveMessage(null), 3000);
      if (onSave) onSave(photos);
    } else {
      setSaveMessage("Failed to save layout");
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  const handleToggleEditMode = () => {
    const success = toggleEditMode();
    if (success) {
      if (isEditMode) {
        setSaveMessage("Layout locked! Visitors will see the final version.");
      } else {
        setSaveMessage("Edit mode enabled. You can now make changes.");
      }
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  const handleImportLayout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importLayout(file);
      setSaveMessage("Layout imported successfully!");
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  const selectedPhoto = photos.find((p) => p.id === selectedId);

  if (!isLoaded) {
    return <div className="py-20 px-16">Loading...</div>;
  }

  return (
    <section id="photography" className="py-20 px-16 relative"
      style={{ backgroundColor: "oklch(0.97 0.01 75)" }}>

      <div className="max-w-7xl">
        {/* Section header with edit mode toggle */}
        <div className="flex items-center justify-between gap-4 mb-12">
          <span className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "oklch(0.54 0.14 40)" }}>
            Photography
          </span>
          <button
            onClick={handleToggleEditMode}
            className="py-2 px-4 rounded-sm text-xs font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: isEditMode ? "oklch(0.54 0.14 40)" : "oklch(0.92 0.02 75)",
              color: isEditMode ? "white" : "oklch(0.18 0.035 55)",
            }}
          >
            {isEditMode ? (
              <>
                <Unlock size={14} />
                Edit Mode: ON
              </>
            ) : (
              <>
                <Lock size={14} />
                Edit Mode: OFF
              </>
            )}
          </button>
        </div>

        {/* Save message */}
        {saveMessage && (
          <div className="mb-6 p-4 rounded-sm text-sm font-medium"
            style={{
              backgroundColor: "oklch(0.54 0.14 40)",
              color: "white",
            }}>
            {saveMessage}
          </div>
        )}

        {/* Locked notice */}
        {!isEditMode && photos.length > 0 && (
          <div className="mb-6 p-4 rounded-sm text-sm"
            style={{
              backgroundColor: "oklch(0.92 0.02 75)",
              color: "oklch(0.18 0.035 55)",
              borderLeft: "4px solid oklch(0.54 0.14 40)",
            }}>
            <p className="font-medium">✓ Layout is locked and final</p>
            <p className="text-xs mt-1">Visitors see this as the published version. Toggle Edit Mode to make changes.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Canvas */}
          <div className="lg:col-span-3">
            <div
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-full h-[600px] border-2 rounded-sm overflow-hidden"
              style={{
                borderColor: "oklch(0.54 0.14 40)",
                backgroundColor: "#000",
                cursor: isEditMode && isDragging ? "grabbing" : isEditMode ? "grab" : "default",
                opacity: isEditMode ? 1 : 0.95,
              }}
            >
              {photos.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div style={{ color: "oklch(0.62 0.025 55)" }}>
                    <p className="text-sm mb-4">
                      {isEditMode ? "Upload images to get started" : "No photography layout yet"}
                    </p>
                    <p className="text-xs">
                      {isEditMode ? "Drag and drop or click the upload button" : "Enable Edit Mode to add images"}
                    </p>
                  </div>
                </div>
              )}

              {photos.map((photo) => (
                <div
                  key={photo.id}
                  onMouseDown={(e) => handleMouseDown(e, photo.id)}
                  className="absolute transition-all duration-200"
                  style={{
                    left: `${photo.x}px`,
                    top: `${photo.y}px`,
                    width: `${photo.width}px`,
                    height: `${photo.height}px`,
                    zIndex: photo.zIndex,
                    transform: `rotate(${photo.rotation}deg)`,
                    border: isEditMode && selectedId === photo.id ? "2px solid oklch(0.54 0.14 40)" : "none",
                    cursor: isEditMode ? "grab" : "default",
                  }}
                >
                  <img
                    src={photo.src}
                    alt="uploaded"
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />

                  {/* Resize handle - only show in edit mode */}
                  {isEditMode && selectedId === photo.id && (
                    <div
                      className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                      style={{ backgroundColor: "oklch(0.54 0.14 40)" }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        const startX = e.clientX;
                        const startY = e.clientY;
                        const startWidth = photo.width;
                        const startHeight = photo.height;

                        const handleResize = (moveEvent: MouseEvent) => {
                          const newWidth = Math.max(100, startWidth + (moveEvent.clientX - startX));
                          const newHeight = Math.max(100, startHeight + (moveEvent.clientY - startY));
                          updatePhoto(photo.id, { width: newWidth, height: newHeight });
                        };

                        const handleResizeEnd = () => {
                          document.removeEventListener("mousemove", handleResize);
                          document.removeEventListener("mouseup", handleResizeEnd);
                        };

                        document.addEventListener("mousemove", handleResize);
                        document.addEventListener("mouseup", handleResizeEnd);
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Controls sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Upload button - only show in edit mode */}
              {isEditMode && (
                <div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-3 px-4 rounded-sm font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "oklch(0.54 0.14 40)",
                      color: "white",
                    }}
                  >
                    <Plus size={16} />
                    Upload Images
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              )}

              {/* Save layout button - only show in edit mode */}
              {isEditMode && photos.length > 0 && (
                <button
                  onClick={handleSaveLayout}
                  className="w-full py-3 px-4 rounded-sm font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "oklch(0.54 0.14 40)",
                    color: "white",
                  }}
                >
                  <Save size={16} />
                  Save Layout
                </button>
              )}

              {/* Last saved info */}
              {lastSaved && (
                <div className="text-xs p-3 rounded-sm"
                  style={{ backgroundColor: "oklch(0.92 0.02 75)", color: "oklch(0.62 0.025 55)" }}>
                  <p className="font-medium mb-1">Last saved:</p>
                  <p>{lastSaved.toLocaleString()}</p>
                </div>
              )}

              {/* Selected photo controls - only show in edit mode */}
              {isEditMode && selectedPhoto && (
                <div className="p-4 rounded-sm border"
                  style={{ borderColor: "oklch(0.92 0.02 75)" }}>
                  <h3 className="text-sm font-medium mb-4"
                    style={{ color: "oklch(0.18 0.035 55)" }}>
                    Selected Image
                  </h3>

                  <div className="space-y-4">
                    {/* Width */}
                    <div>
                      <label className="text-xs font-medium block mb-2"
                        style={{ color: "oklch(0.62 0.025 55)" }}>
                        Width: {Math.round(selectedPhoto.width)}px
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="600"
                        value={selectedPhoto.width}
                        onChange={(e) => updatePhoto(selectedPhoto.id, { width: parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>

                    {/* Height */}
                    <div>
                      <label className="text-xs font-medium block mb-2"
                        style={{ color: "oklch(0.62 0.025 55)" }}>
                        Height: {Math.round(selectedPhoto.height)}px
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="600"
                        value={selectedPhoto.height}
                        onChange={(e) => updatePhoto(selectedPhoto.id, { height: parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>

                    {/* Rotation */}
                    <div>
                      <label className="text-xs font-medium block mb-2"
                        style={{ color: "oklch(0.62 0.025 55)" }}>
                        Rotation: {Math.round(selectedPhoto.rotation)}°
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={selectedPhoto.rotation}
                        onChange={(e) => updatePhoto(selectedPhoto.id, { rotation: parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>

                    {/* Z-Index */}
                    <div>
                      <label className="text-xs font-medium block mb-2"
                        style={{ color: "oklch(0.62 0.025 55)" }}>
                        Layer: {selectedPhoto.zIndex}
                      </label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updatePhoto(selectedPhoto.id, { zIndex: Math.max(0, selectedPhoto.zIndex - 1) })}
                          className="flex-1 py-2 px-3 text-xs rounded-sm transition-all"
                          style={{ backgroundColor: "oklch(0.92 0.02 75)" }}
                        >
                          Back
                        </button>
                        <button
                          onClick={() => updatePhoto(selectedPhoto.id, { zIndex: selectedPhoto.zIndex + 1 })}
                          className="flex-1 py-2 px-3 text-xs rounded-sm transition-all"
                          style={{ backgroundColor: "oklch(0.92 0.02 75)" }}
                        >
                          Front
                        </button>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => deletePhoto(selectedPhoto.id)}
                      className="w-full py-2 px-4 rounded-sm text-sm font-medium transition-all flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "oklch(0.577 0.245 27.325)",
                        color: "white",
                      }}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {/* Export/Import - only show in edit mode */}
              {isEditMode && photos.length > 0 && (
                <div className="space-y-2 pt-4 border-t"
                  style={{ borderColor: "oklch(0.92 0.02 75)" }}>
                  <button
                    onClick={() => exportLayout()}
                    className="w-full py-2 px-4 rounded-sm text-xs font-medium transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: "oklch(0.92 0.02 75)", color: "oklch(0.18 0.035 55)" }}
                  >
                    <Download size={14} />
                    Export Layout
                  </button>
                  <button
                    onClick={() => importInputRef.current?.click()}
                    className="w-full py-2 px-4 rounded-sm text-xs font-medium transition-all flex items-center justify-center gap-2"
                    style={{ backgroundColor: "oklch(0.92 0.02 75)", color: "oklch(0.18 0.035 55)" }}
                  >
                    <Upload size={14} />
                    Import Layout
                  </button>
                  <input
                    ref={importInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleImportLayout}
                    className="hidden"
                  />
                </div>
              )}

              {/* Info */}
              <div className="text-xs p-4 rounded-sm"
                style={{ backgroundColor: "oklch(0.92 0.02 75)", color: "oklch(0.62 0.025 55)" }}>
                <p className="font-medium mb-2">
                  {isEditMode ? "Edit Mode Active" : "Layout Locked"}
                </p>
                <ul className="space-y-1 text-xs">
                  {isEditMode ? (
                    <>
                      <li>• Click and drag to move images</li>
                      <li>• Use controls to resize and rotate</li>
                      <li>• Adjust layer order to overlap images</li>
                      <li>• Save when done, then lock layout</li>
                    </>
                  ) : (
                    <>
                      <li>• Layout is published and final</li>
                      <li>• All visitors see this version</li>
                      <li>• Toggle Edit Mode to make changes</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
