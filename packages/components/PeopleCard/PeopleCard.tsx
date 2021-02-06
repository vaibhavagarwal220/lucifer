import { Persona, IPersonaSharedProps, PersonaSize, PersonaPresence } from "@fluentui/react";
import React from "react";
import { PeopleDetails } from '@lucifer/core'
import PeopleCardCSS from './PeopleCard.module.css';

interface Props {
    peopleDetail: PeopleDetails
}
const getInitials = (name:string) => {
  return name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase();
} 
export const PeopleCard: React.FC<Props>= (props: Props) => {
  const imageUrl = props.peopleDetail.person.image?.medium;
  const birthday = props.peopleDetail.person.birthday;
  const text= '';
  const personProps: IPersonaSharedProps = {
    imageUrl: imageUrl,
    imageInitials: getInitials(props.peopleDetail.person.name),
    text: props.peopleDetail.person.name,
    secondaryText: props.peopleDetail.person.country?.name,
    tertiaryText: (birthday) ? `Born on ${birthday}` : ''
    // ,optionalText: props.peopleDetail.person.url
  };
  const [renderDetails, updateRenderDetails] = React.useState(true);
  return (
      <Persona
        className={PeopleCardCSS.peopleCard}
        {...personProps}
        size={PersonaSize.size100}
        presence={PersonaPresence.none}
        hidePersonaDetails={!renderDetails}
        imageAlt={props.peopleDetail.person.name}
      />        

    );
}
  