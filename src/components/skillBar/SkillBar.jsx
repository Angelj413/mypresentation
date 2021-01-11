import React from "react";

const SkillBar = (props) => {
  const { bgcolor, completed, skill } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
    display: 'flex',
    justifyContent: 'space-between'
  }

  const labelStyles = {
    padding: '0px 15px',
    color: 'white',
    fontWeight: 'bold'
  }


  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${skill}`}</span>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default SkillBar;