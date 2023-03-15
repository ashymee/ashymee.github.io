import { useTranslation } from "react-i18next";
import { FaLink } from "react-icons/fa";

const Details = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="divider">{t("kontak")}</div>
      <div className="space-y-3">
        {/* email */}
        <div className="">
          <div className="text-xl flex items-center label-link">
            <div className="mr-5 text-gray-400">{t("surel")}:</div>
            <a
              href="mailto:ashymee@gmail.com"
              className="label-icon"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLink />
            </a>
          </div>
          <div className="text-2xl">ashymee@gmail.com</div>
        </div>
        {/* address */}
        <div className="">
          <div className="text-xl w-32 flex items-center label-link">
            <div className="mr-5 text-gray-400">{t("alamat")}:</div>
            <a
              href="https://goo.gl/maps/bx6iSuLNGbgR74aa9"
              className="label-icon"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLink />
            </a>
          </div>
          <div className="text-2xl">
            Perum Margahayu Permai, Jl. Permai 19 No. 3, Bandung, West Java,
            Indonesia - 40218
          </div>
        </div>
        {/* domicile */}
        <div className="">
          <div className="text-xl w-32 flex items-center label-link">
            <div className="mr-5 text-gray-400">{t("domisili")}:</div>
            <a
              href="https://goo.gl/maps/7sBg9msSTGgQNiEcA"
              className="label-icon"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLink />
            </a>
          </div>
          <div className="text-2xl">
            Perumnas Adiarsa Kencana, Jl. Cisadane 1 No. 207, Kab. Karawang,
            West Java, Indonesia - 41313
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
