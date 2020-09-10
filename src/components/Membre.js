import React, { Fragment } from "react";

const Membre = ({ firstname, lastname, role, birth, vote }) => {

  return (
    <Fragment>
      <h3>{firstname} {lastname} </h3>
      <p> {firstname} est né le {birth} c'est {role} et je l'aime ! </p>
      <p> Nombre de like : {vote}</p>
    </Fragment>
  )
}
export default Membre