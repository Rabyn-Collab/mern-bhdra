import { DiCss3, DiModernizr } from "react-icons/di";
import { TbFavicon } from "react-icons/tb";
export default function CssSection() {

  const cssData = [
    {
      icon: <TbFavicon size={200} />,
      title: 'Responsive',
      properties: [
        'Built-in responsiveness',
        'Mobile-first approach',
        'Flexbox for layout',
        'Media queries for responsive design',
      ],
    },
    {
      icon: <DiCss3 size={200} />,
      title: 'Standard Css',
      properties: [
        'Customizable colors',
        'Typography',
        'Backgrounds',
        'Borders',
        'Box shadows',
      ],
    },
    {
      icon: <DiModernizr size={200} />,
      title: 'Design',
      properties: [
        'Bold colors and shadows',
        'Paper like design',
        'Equal across platforms',
        'Equal across devices',
      ],
    },
  ];

  return (
    <section className="my-3 grid grid-cols-3 gap-5 ">


      {cssData.map(({ icon, title, properties }) => {
        return <div className="shadow-xl flex flex-col items-center pt-4 pb-11 ">
          <h1 className="text-center">{title}</h1>
          {icon}

          <div className="flex flex-col text-center gap-3">
            {properties.map((property) => {
              return <p>{property}</p>
            })}
          </div>


        </div>

      })}

    </section>
  )
}
