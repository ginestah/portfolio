import "./Modal.css";

export default function Modal(props) {
  const { handleOpen } = props;
  return (
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation}>
        {props.children}
      </div>
    </div>
  );
}
