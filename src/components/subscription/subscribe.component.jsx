const Subscription = () => {
  return (
    <div className="subcription text-center my-5">
      <h4 className="display-4">Join With Us!</h4>
      <p>Subscribe to our newsletter to receive news on update</p>
      <input
        type="text"
        placeholder="Enter your email"
        className="text-center form-control w-25 mx-auto mb-4"
      />
      <button className="btn btn-secondary">Subscribe</button>
    </div>
  );
};

export default Subscription;
