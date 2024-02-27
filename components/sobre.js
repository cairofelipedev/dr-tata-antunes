export default function Sobre() {
  return (
    <div className="mx-auto max-w-screen-lg px-8 py-10 xl:px-5">
      <p className="pb-12 pt-5 text-center text-3xl font-bold">
        SOBRE
      </p>
      <div>
        <div className="grid grid-cols-2 items-center justify-center gap-10">
          <div>
            <h1 className="pb-5 text-3xl font-black">
              Thallyta Maria Tavares Antunes
            </h1>
            <p>
              Possui graduação em Medicina pela Universidade Federal
              de Alagoas (2015). Médica infectologista pela
              Universidade Estadual de Ciências da Sáude de Alagoas
              (2019). Mestranda do programa de Epidemiologia em Saúde
              Pública da Escola Nacional de Saúde Pública da Fiocruz.
              Médica infectologista do setor de Vigilância em Saúde do
              HU-UFPI e presidente da Comissão de Controle de Infecção
              Hospitalar do HU-UFPI.
            </p>
          </div>
          <div className="w-full">
            <div>
              <div className="grid grid-cols-2">
                <p className="py-2 text-center pl-44">2022</p>
                <p className="py-2 text-start">
                  - Mestrado profissional em andamento em
                  Epidemiologia em Saúde Pública
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="py-2 text-center pl-44">2019</p>
                <p className="py-2 text-start">
                  - Especialização (Residência médica)
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="py-2 text-center pl-44">2021</p>
                <p className="py-2 text-start">
                  - Especialização em MBA em Gestão em Saúde, Controle
                  de Infecção e Segurança do Paciente
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="py-2 text-center pl-44">2015</p>
                <p className="py-2 text-start">
                  - Graduação em Medicina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
