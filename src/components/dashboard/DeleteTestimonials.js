export default function DeleteTestimonials({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="logout-wrapper"
      role="dialog"
      aria-label="Log out confirmation">
      <div className="logout-backdrop" onClick={onClose} role="presentation" />

      <div className="logout-modal">
        <h4>Delete Testimonial</h4>
        <p>
          Do you really want to delete this testimonial? This action cannot be
          undone.
        </p>

        <div className="logout-actions">
          <button className="logout-no" onClick={onClose}>
            No
          </button>
          <button className="logout-yes" onClick={onClose}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
