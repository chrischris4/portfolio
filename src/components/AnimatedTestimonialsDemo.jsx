import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { useTranslation } from 'react-i18next';

export function AnimatedTestimonialsDemo() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote:
        "Développeur / Concepteur d'application",
      name: "Formation Alt",
      designation: "10/2024 - 04/2025",
      src: "https://i.ibb.co/WWWRbjbV/Capture-d-cran-2025-01-31-043508.png",
    },
    {
      quote: `${t('openPTranslate')}`,

      name: t('openTitleTranslate'),
      designation: "12/2022 - 08/2023",
      src: "https://i.ibb.co/ZzwdcZF/open-min.webp",
    },
    {
      quote: t('adrarPTranslate'),
      name: t('adrarTitleTranslate'),
      designation: "10/2021 - 06/2022",
      src: "https://i.ibb.co/Q6PbSS4/adrar-min.webp"
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
