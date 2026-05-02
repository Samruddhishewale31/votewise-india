"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "100%" };
const center = { lat: 28.6139, lng: 77.2090 }; // Placeholder for New Delhi

export default function ResourcesPage() {
  const [searchState, setSearchState] = useState<"idle" | "searching" | "found">("idle");
  const [epicNumber, setEpicNumber] = useState("");

  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const { isLoaded: isMapLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: mapsApiKey,
  });

  const mapsAvailable = !!mapsApiKey && !loadError;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!epicNumber) return;
    
    setSearchState("searching");
    // Simulate API lookup
    setTimeout(() => {
      setSearchState("found");
      trackEvent("resources_viewed", { epicNumber: epicNumber });
    }, 1500);
  };

  return (
    <div className="py-16 px-6 bg-gray-50/30 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Find Your Local Station</h1>
              <p className="text-lg text-gray-500">Every vote counts, but only if you know where to go. Access location data for your assigned polling booth.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
              <form onSubmit={handleSearch} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="epic" className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    ENTER EPIC NUMBER
                  </label>
                  <div className="relative">
                    <input 
                      id="epic"
                      type="text"
                      required
                      value={epicNumber}
                      onChange={(e) => setEpicNumber(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono" 
                      placeholder="ABC1234567" 
                    />
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">id_card</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Your 10-digit alphanumeric Voter ID number.</p>
                </div>
                
                <button 
                  type="submit"
                  disabled={searchState === "searching"}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/30 transition-all flex justify-center items-center gap-2 focus:outline-none focus:ring-4 focus:ring-primary/40 disabled:opacity-70"
                >
                  {searchState === "searching" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Locating Booth...
                    </>
                  ) : (
                    "Search Registered Booth"
                  )}
                </button>
              </form>
              
              <div className="pt-4 border-t border-gray-50 text-center">
                <p className="text-sm text-gray-500">
                  Can't find your card? <button className="text-primary font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">Search by personal details</button>
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={cn(
              "aspect-[4/3] lg:aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-1000 relative",
              searchState === "found" ? "ring-4 ring-primary/20" : ""
            )}>
              {/* Maps Mock Placeholder */}
              {searchState === "idle" || searchState === "searching" ? (
                <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 text-gray-400 p-8 text-center">
                   <MapPin className={cn("w-16 h-16 mb-4 opacity-20", searchState === "searching" && "animate-bounce")} />
                   <p className="font-medium text-lg">Waiting for search criteria</p>
                   <p className="text-sm">Enter your EPIC number to view map</p>
                </div>
              ) : mapsAvailable && isMapLoaded ? (
                 <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={{ disableDefaultUI: true, zoomControl: true }}
                 >
                    <Marker position={center} />
                 </GoogleMap>
              ) : (
                <>
                  {/* Fake map image background */}
                  <img 
                    alt="District map visualization" 
                    className="w-full h-full object-cover transition-all duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBvgZEYtn2gDq8_TaQKWopZ-VdbrIV1dJzp2E4dYbTqbK_4mPPUgWZByFJKx9IaMUGGJd8AIGTyuytCc1c4tn_Zo7TbKFExiLVXyBIUXhvOEmienKkj9xLjQk9I-ahVX4c7Ovj2fWVRJQ29hFXFXXlYvEQZIEN7m2HijBT2wvZvE6-Fh0tnqrVCqAxPB9_KDeUEOdauXBnPBblksN1NTJBbZ3Zu9_9vhVkH8aYYOlVXx2RwE3fHLkmJ8Wpvo1G6eIStaQDuTl7kJZ"
                  />
                  
                  {/* Hovering Booth Info */}
                  <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in duration-500">
                    <div className="bg-white/95 backdrop-blur-md px-8 py-5 rounded-2xl shadow-2xl border border-white flex flex-col items-center gap-4 max-w-[280px] text-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg -mt-10">
                        <span className="material-symbols-outlined text-white text-3xl" aria-hidden="true">location_on</span>
                      </div>
                      <div>
                        <p className="text-sm text-primary font-bold uppercase tracking-widest mb-1">PART NO. 142</p>
                        <p className="text-lg font-black text-gray-900 mb-2">Government Boys Senior Sec. School</p>
                        <p className="text-sm text-gray-500 font-medium">Room No 2, Ground Floor, Central District</p>
                      </div>
                      <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-300">
                         Get Directions
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Provides fallback mock if Maps API unavailable
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
