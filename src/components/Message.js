const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      {/* dangerouslySetInnerHTML simplemente addicional html a el mensaje, 
      en este caso para emfatizar el texto del mensaje */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
