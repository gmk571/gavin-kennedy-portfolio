/*
 * DESIGN PHILOSOPHY: Warm Earthy Minimalist
 * Photography data — Abstract collage layout organized by location
 * Excludes photos with people, focuses on landscapes and architecture
 */

export interface Photo {
  id: string;
  url: string;
  alt: string;
  number: number;
  gridSpan?: "small" | "medium" | "large" | "wide";
}

export interface PhotoLocation {
  id: string;
  name: string;
  description: string;
  photos: Photo[];
}

export const photographyData: PhotoLocation[] = [
  {
    id: "peru",
    name: "Peru",
    description: "Shot on Lumix Leica DMC-ZS100",
    photos: [
      {
        id: "p-peru-01",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/XQOtuomOVLCtJGwj.jpg",
        alt: "Peru landscape",
        number: 1,
        gridSpan: "medium",
      },
      {
        id: "p-peru-02",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/hOZohZoGRvLeyqpk.jpg",
        alt: "Peru landscape",
        number: 2,
        gridSpan: "small",
      },
      {
        id: "p-peru-04",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/RMhbQrSqcaVrKxMT.jpg",
        alt: "Peru landscape",
        number: 3,
        gridSpan: "large",
      },
      {
        id: "p-peru-06",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/AAZaWKcNSDGsAjuH.jpg",
        alt: "Peru landscape",
        number: 4,
        gridSpan: "medium",
      },
      {
        id: "p-peru-08",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/daDNqBUhvCNUUolW.jpg",
        alt: "Peru landscape",
        number: 5,
        gridSpan: "small",
      },
      {
        id: "p-peru-10",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/RgOKNcuWiIryrkQb.jpg",
        alt: "Peru landscape",
        number: 6,
        gridSpan: "large",
      },
      {
        id: "p-peru-12",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/faeGrjHfqHLosUQo.jpg",
        alt: "Peru landscape",
        number: 7,
        gridSpan: "medium",
      },
      {
        id: "p-peru-15",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/JPiTdZEWawUFaYCo.jpg",
        alt: "Peru landscape",
        number: 8,
        gridSpan: "medium",
      },
    ],
  },
  {
    id: "india",
    name: "India",
    description: "Shot on Lumix Leica DMC-ZS100 and analog film",
    photos: [
      {
        id: "p-india-03",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/jXQbQyUNWkMchrrB.jpg",
        alt: "India landscape",
        number: 1,
        gridSpan: "small",
      },
      {
        id: "p-india-05",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/olnflimFVgdItBtL.jpg",
        alt: "India landscape",
        number: 2,
        gridSpan: "small",
      },
      {
        id: "p-india-07",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/qpaHWKBHnnbXaLzH.jpg",
        alt: "India landscape",
        number: 3,
        gridSpan: "small",
      },
      {
        id: "p-india-12",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/ZckyYyTImggupfda.jpg",
        alt: "India landscape",
        number: 4,
        gridSpan: "large",
      },
      {
        id: "p-india-18",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/hmCeWWjIQPAWivon.jpg",
        alt: "India landscape",
        number: 5,
        gridSpan: "medium",
      },
      {
        id: "p-india-25",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/tDRXLtOKeMoCoRQv.jpg",
        alt: "India landscape",
        number: 6,
        gridSpan: "medium",
      },
      {
        id: "p-india-32",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/rftnElvdfziNSsmr.jpg",
        alt: "India landscape",
        number: 7,
        gridSpan: "medium",
      },
      {
        id: "p-india-40",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/ouvMSqRdBqVWrKut.jpg",
        alt: "India landscape",
        number: 8,
        gridSpan: "medium",
      },
      {
        id: "f-india-01",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/HwZykPNzvKObEOth.jpg",
        alt: "India film photography",
        number: 9,
        gridSpan: "medium",
      },
      {
        id: "f-india-04",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/osNsuZFzavVgOOOu.jpg",
        alt: "India film photography",
        number: 10,
        gridSpan: "medium",
      },
      {
        id: "f-india-07",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/rUpapnQGftjkJTjF.jpg",
        alt: "India film photography",
        number: 11,
        gridSpan: "small",
      },
      {
        id: "f-india-10",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/zCxDCGcfScmVqyDt.jpg",
        alt: "India film photography",
        number: 12,
        gridSpan: "medium",
      },
      {
        id: "f-india-13",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/HTEUqebYUoVtMuYk.jpg",
        alt: "India film photography",
        number: 13,
        gridSpan: "small",
      },
      {
        id: "f-india-16",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/GVyQMEzwXAPswweo.jpg",
        alt: "India film photography",
        number: 14,
        gridSpan: "medium",
      },
      {
        id: "f-india-19",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/qWHMYQQHEZsxubVi.jpg",
        alt: "India film photography",
        number: 15,
        gridSpan: "small",
      },
      {
        id: "f-india-22",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/xQQyTjHmvbcywTvZ.jpg",
        alt: "India film photography",
        number: 16,
        gridSpan: "medium",
      },
    ],
  },
  {
    id: "montana",
    name: "Montana",
    description: "Analog film photography",
    photos: [
      {
        id: "f-montana-01",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/ygKsTUSMQxuXZHwD.jpg",
        alt: "Montana landscape",
        number: 1,
        gridSpan: "medium",
      },
      {
        id: "f-montana-02",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/yWmgcyVanArjmKcP.jpg",
        alt: "Montana landscape",
        number: 2,
        gridSpan: "medium",
      },
      {
        id: "f-montana-03",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/GIebHcAqStSvMgEj.jpg",
        alt: "Montana landscape",
        number: 3,
        gridSpan: "large",
      },
      {
        id: "f-montana-04",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/UlySMDnpvCGmfAGd.jpg",
        alt: "Montana landscape",
        number: 4,
        gridSpan: "medium",
      },
      {
        id: "f-montana-05",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/DglrgSujwrzOAshi.jpg",
        alt: "Montana landscape",
        number: 5,
        gridSpan: "medium",
      },
      {
        id: "f-montana-06",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/acESWgzsaMKctxzf.jpg",
        alt: "Montana landscape",
        number: 6,
        gridSpan: "medium",
      },
      {
        id: "f-montana-07",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/loyTDeejhNMRsmQU.jpg",
        alt: "Montana landscape",
        number: 7,
        gridSpan: "small",
      },
      {
        id: "f-montana-08",
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663383711665/roQzfsOCpoLfynzJ.jpg",
        alt: "Montana landscape",
        number: 8,
        gridSpan: "small",
      },
    ],
  },
];
