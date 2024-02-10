import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'

export const SupportModel = () => {
  return (
    <>
<button type="button" className='support-circle' style={{border:"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
<HiOutlinePlus className="text-white supportplus p-1"/>
</button>

<div className="modal fade" id="exampleModal" style={{top:"20%"}} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="modal-title strong-600 heading-5" id="exampleModalLabel">Create a Ticket</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="row">
                          <div className="col-md-2 text-left mb-2">
                              <label>Subject</label>
                          </div>
                          <div className="col-md-10">
                              <input type="text" className="form-control mb-3" placeholder="Subject" name="subject" required=""/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-2 text-left mb-2">
                              <label>Provide a detailed description</label>
                          </div>
                          <div className="col-md-10">
                              <textarea type="text" className="form-control mb-3" rows="3" name="details" placeholder="Type your reply" data-buttons="bold,underline,italic,|,ul,ol,|,paragraph,|,undo,redo" required=""></textarea>
                          </div>
                      </div>
                      <div className="form-group row">
                          <label className="col-md-2 col-form-label text-left">Photo</label>
                          <div className="col-md-10">
                              <div className="input-group" data-toggle="aizuploader" data-type="image" data-multiple="true">
                                  <div className="input-group-prepend">
                                      <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                  </div>
                                  <div className="form-control file-amount">Choose file</div>
                                  <input type="hidden" name="attachments" className="selected-files"/>
                              </div>
                              <div className="file-preview box sm"></div>
                          </div>
                      </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary">Send Tickets</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
