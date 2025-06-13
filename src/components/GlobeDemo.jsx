import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { memo } from "react";


export const GlobeDemo = memo(() => {
    const [World, setWorld] = useState(null);



    useEffect(() => {
        import("../components/ui/globe")
            .then((m) => setWorld(() => m.World))
            .catch((err) => console.error("Erreur lors du chargement de World:", err));
    }, []);

    if (!World) {
        return <div>Chargement...</div>; // Affiche un loader en attendant l'import
    }

    const globeConfig = {
        pointSize: 2,
        globeColor: "#2A2F3A",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#1b202a",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,1)",
        ambientLight: "#edfaff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 800,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 62.031106, lng: 129.722908 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#edfaff", "#edfaff", "#edfaff"];
    const sampleArcs = [
        {
            order: 1,
            startLat: 56.202651,
            startLng: 10.232105,
            endLat: 43.598499,
            endLng: 3.896845,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 2,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
            order: 4,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },{
            order: 3,
            startLat: 56.202651,
            startLng: 10.232105,
            endLat: 43.598499,
            endLng: 3.896845,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        },{
            order: 5,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
        },
            {
                order: 1,
                startLat: 40.7128,
                startLng: -74.0060,
                endLat: 51.5074,
                endLng: -0.1278,
                arcAlt: 0.2,
                color: colors[Math.floor(Math.random() * colors.length)],
            },
            {
                order: 2,
                startLat: 35.6895,
                startLng: 139.6917,
                endLat: -33.8688,
                endLng: 151.2093,
                arcAlt: 0.25,
                color: colors[Math.floor(Math.random() * colors.length)],
            },
            {
                order: 3,
                startLat: 48.8566,
                startLng: 2.3522,
                endLat: -22.9068,
                endLng: -43.1729,
                arcAlt: 0.2,
                color: colors[Math.floor(Math.random() * colors.length)],
            },
            {
                order: 4,
                startLat: 55.7558,
                startLng: 37.6173,
                endLat: 34.0522,
                endLng: -118.2437,
                arcAlt: 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
            },
            {
                order: 5,
                startLat: -1.286389,
                startLng: 36.817223,
                endLat: 19.432608,
                endLng: -99.133209,
                arcAlt: 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
            }
        
    ];

    return (
        <div className="flex flex-row items-center justify-center h-auto relative w-full">
            <div className="w-[700px] relative overflow-hidden h-[600px] max-[991px]:w-[400px] max-[991px]:h-[400px] max-[635px]:w-[300px] max-[635px]:h-[300px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 20 }}
                    transition={{ duration: 0 }}
                    className="div"
                >
                </motion.div>
                <div className="absolute w-full bottom-0 inset-x-0 h-40 cursor-pointer from-transparent to-black z-40" />
                <div className="absolute w-full -bottom-0 right-0 h-full z-10">
                    {Array.isArray(sampleArcs) && sampleArcs.length > 0 ? (
                        <World data={sampleArcs} globeConfig={globeConfig} />
                    ) : (
                        <div>Chargement du globe...</div>
                    )}
                </div>
            </div>
        </div>
    );
})

