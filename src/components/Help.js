const Help = () => {
  //While not fully interactive, this page is meant to allow users to fully understand what are the differences between the shipping options they have on the Cart.js page.
  return (
    <div className="container">
      <h2>Shipping Help</h2>
      <h5>
        We offer various shipping options so that you may be sure to receive
        your order: Standard, Express, and Overnight shipping:
        <ul>
          <li>
            Standard delivery will require between 5-7 days to be delivered,
            with no additional costs
          </li>
          <li>
            Express delivery will require between 2-3 days to be delivered, with
            an extra cost of $5
          </li>
          <li>
            Overnight delivery will require around 24 hours to be delivered,
            with an extra cost of $50
          </li>
        </ul>
      </h5>
    </div>
  );
};

export default Help;
