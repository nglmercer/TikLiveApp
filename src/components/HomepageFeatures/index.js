import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ListaCaracteristicas = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Rapido y confiable.
      </>
    ),
  },
  {
    title: 'Enfócate en lo que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Enfocado en ayudarme y facilitarte la vida<code>LIVE</code>.
      </>
    ),
  },
  {
    title: 'Potenciado por la comunidad',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Projecto OpenSource basado en la comunidad.
      </>
    ),
  },
];

function Caracteristica({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CaracteristicasInicio() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ListaCaracteristicas.map((props, idx) => (
            <Caracteristica key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}