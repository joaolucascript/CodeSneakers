import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section
      className="container py-10 px-4 sm:px-6 lg:px-8 pt-[calc(74px+2.5rem)] mt-[-74px]"
      id="quemsomos"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-6">
        <div>
          <h2 className="font-bold text-4xl">Quem Somos</h2>
          <hr className="my-4" />
          <p className="w-[80%] items-center justify-center m-auto">
            Somos uma loja especializada em tênis, oferecendo uma grande
            variedade de modelos das melhores marcas do mercado. Buscamos sempre
            oferecer a melhor experiência de compra para nossos clientes,
            garantindo qualidade, conforto e estilo em todos os produtos. Com
            uma equipe apaixonada por esportes, estamos comprometidos em ajudar
            nossos clientes a encontrarem o tênis perfeito para cada ocasião,
            seja para a prática esportiva ou para o dia a dia. Venha conhecer
            nossa loja e sinta-se em casa!
          </p>
        </div>
        <div>
          <Image
            src="https://unsplash.com/photos/joHasPcobwg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyODA3NDY0&force=true&w=1920"
            alt="Imagem de quem somos"
            width={1000}
            height={1000}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};
