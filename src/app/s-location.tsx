import { WorldMapDemo } from "@/components/world-map-component";

export function HomeLocation() {
    return (
        <section className=" mt-40 overflow-hidden" id="localização">
            <div className="flex flex-col items-center gap-8 justify-center">    
            <WorldMapDemo />
            </div>
        </section>
    )
}