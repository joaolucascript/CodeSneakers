import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { teamMembers } from '../database/TeamMembers';
import Image from 'next/image';
import { TeamMemberProps } from '../types/teamMemberProps';

export const TeamMember = ({
  name,
  role,
  image,
  linkedin,
}: TeamMemberProps) => {
  return (
    <div className="text-center">
      <Image
        src={image}
        alt={`Foto de ${name}`}
        width={400}
        height={400}
        className="rounded-full mb-3 w-48 h-48 m-10 object-cover"
      />
      <h5 className="text-xl font-bold">{name}</h5>
      <p className="text-sm">{role}</p>
      <a href={linkedin} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-8 h-8 mt-2 text-blue-700"
        />
      </a>
    </div>
  );
};

export const Team = () => {
  return (
    <section className="pt-[calc(74px)] mt-[calc(-74px+2.5rem)]" id="time">
      <div className="text-j-dark text-center bg-gray-100 py-10">
        <h2 className="my-5 font-bold text-4xl">Nosso Time</h2>
        <div className="w-screen flex justify-center flex-wrap">
          {teamMembers.map((member) => (
            <TeamMember {...member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
