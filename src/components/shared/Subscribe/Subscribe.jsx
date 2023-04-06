export const Subscribe = () => {
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form' id="post-leave-formbg">
            <form className="text-center mt-5 mb-5">
              <h3>Stay in touch</h3>
              <p>Nourish your skin with toxin-free cosmetic roducts.</p>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                  />
                </div>
                <button type='submit' className='btn'>
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
