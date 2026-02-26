/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Hook for managing persistent photography layouts with edit mode locking
 * Allows design and save, then lock for read-only viewing by all visitors
 */

import { useState, useEffect } from "react";

export interface PhotoItem {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  rotation: number;
}

const STORAGE_KEY = "gavin_photography_layout";
const EDIT_MODE_KEY = "gavin_photography_edit_mode";

export function usePhotographyLayout() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Load layout and edit mode from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const editMode = localStorage.getItem(EDIT_MODE_KEY);
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPhotos(parsed);
      } catch (error) {
        console.error("Failed to load photography layout:", error);
      }
    }
    
    if (editMode) {
      try {
        setIsEditMode(JSON.parse(editMode));
      } catch (error) {
        console.error("Failed to load edit mode:", error);
      }
    }
    
    setIsLoaded(true);
  }, []);

  // Save layout to localStorage
  const saveLayout = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
      setLastSaved(new Date());
      return true;
    } catch (error) {
      console.error("Failed to save photography layout:", error);
      return false;
    }
  };

  // Toggle edit mode and persist it
  const toggleEditMode = () => {
    const newEditMode = !isEditMode;
    try {
      localStorage.setItem(EDIT_MODE_KEY, JSON.stringify(newEditMode));
      setIsEditMode(newEditMode);
      return true;
    } catch (error) {
      console.error("Failed to toggle edit mode:", error);
      return false;
    }
  };

  // Lock the layout (disable edit mode)
  const lockLayout = () => {
    try {
      localStorage.setItem(EDIT_MODE_KEY, JSON.stringify(false));
      setIsEditMode(false);
      return true;
    } catch (error) {
      console.error("Failed to lock layout:", error);
      return false;
    }
  };

  // Unlock the layout (enable edit mode)
  const unlockLayout = () => {
    try {
      localStorage.setItem(EDIT_MODE_KEY, JSON.stringify(true));
      setIsEditMode(true);
      return true;
    } catch (error) {
      console.error("Failed to unlock layout:", error);
      return false;
    }
  };

  // Clear layout
  const clearLayout = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(EDIT_MODE_KEY);
      setPhotos([]);
      setIsEditMode(false);
      setLastSaved(null);
      return true;
    } catch (error) {
      console.error("Failed to clear photography layout:", error);
      return false;
    }
  };

  // Export layout as JSON
  const exportLayout = () => {
    const dataStr = JSON.stringify(photos, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `photography-layout-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import layout from JSON file
  const importLayout = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported)) {
          setPhotos(imported);
          saveLayout();
        }
      } catch (error) {
        console.error("Failed to import photography layout:", error);
      }
    };
    reader.readAsText(file);
  };

  return {
    photos,
    setPhotos,
    saveLayout,
    clearLayout,
    exportLayout,
    importLayout,
    isLoaded,
    lastSaved,
    isEditMode,
    toggleEditMode,
    lockLayout,
    unlockLayout,
  };
}
