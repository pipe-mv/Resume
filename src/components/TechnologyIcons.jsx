import { devIconsCdnUrl,  } from './TechnoIcons';

// console.log(technologies); 
const TechnologyIcons = ({ technologies }) => (
  <div className="technology-icons">
    {technologies.map((technology) => (
      <img
        className="technology-icon"
        key={technology.simplename}
        src={`${devIconsCdnUrl}${technology.simplename}/${technology.simplename}${technology.iconSuffix}.svg`}
        alt={technology.simplename}
        title={technology.fullname}
      />
    ))}
  </div>
);

export default TechnologyIcons;
