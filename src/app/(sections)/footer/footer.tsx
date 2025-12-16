import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-[96px] h-fit w-full overflow-hidden bg-card-foreground px-[2%] py-6 md:mt-[128px] lg:mt-[160px]">
      <div className="container relative mx-auto flex min-h-[200px] flex-col items-center justify-center gap-[32px] lg:flex-row lg:justify-between">
        <div className="size-12 lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
          <Link href="/">
            <Image
              src="/images/setting.png"
              alt="Coimbra Protec"
              width={250}
              height={250}
              className="h-full w-full object-cover object-center"
            />
          </Link>
        </div>
        <Link href="https://github.com/SrDev-Henrique" target="_blank">
          <p className="gap-1 font-bold font-secondary text-border text-xs lg:flex lg:text-nowrap lg:text-base">
            Desenvolvido por{" "}
            <span className="text-black-blue hover:underline">
              Henrique Albuquerque
            </span>
          </p>
        </Link>
        <p className="font-bold font-secondary text-border text-xs lg:text-nowrap lg:text-base">
          © {new Date().getFullYear()} Coimbra Protec. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
