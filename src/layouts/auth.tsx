import SilkBackground from "../components/animated/background/silk";
import AppLogo from "../components/icons/logo";

export default function AuthLayout({ children }: any) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[65%] flex items-center justify-center">{children}</div>

      <div className="w-[35%] relative">
        <SilkBackground
          speed={5}
          scale={1}
          color="#755ff8"
          noiseIntensity={1.5}
          rotation={0}
        />

        <div className="absolute bottom-5 right-5 z-50 border-[1.5px] bg-violet-950 px-5 py-3 rounded-2xl flex gap-3 items-center">
            <AppLogo/>
            <p className="text-white font-bold text-lg">AsyncHR</p>
        </div>
      </div>
    </div>
  );
}
