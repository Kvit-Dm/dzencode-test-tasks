'use client';

import * as Dialog from '@radix-ui/react-dialog';
// import { X } from 'lucide-react'; // optional icon

export default function Modal() {
  return (
    <Dialog.Root>
      {/* Button that opens the modal */}
      <Dialog.Trigger asChild>
        <button className="btn btn-primary">Open Modal</button>
      </Dialog.Trigger>

      {/* Modal overlay */}
      <Dialog.Portal>
        <Dialog.Overlay className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />

        {/* Modal content */}
        <Dialog.Content className="modal d-block position-fixed top-50 start-50 translate-middle" style={{ zIndex: 1050 }}>
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Header */}
              <div className="modal-header">
                <Dialog.Title className="modal-title">Modal Title</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="btn-close" aria-label="Close">
                    {/*<X size={18} />*/}
                  </button>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="modal-body">
                <Dialog.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam ducimus, excepturi hic magni
                  tenetur! Aspernatur culpa debitis error, excepturi facilis ipsum maiores nesciunt nihil obcaecati quas quos
                  tempore totam.
                </Dialog.Description>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-success">Confirm</button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
