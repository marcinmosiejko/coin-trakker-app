import { render, screen } from 'test-utils';
import Modal from './Modal';
import ReactModal from 'react-modal';
ReactModal.setAppElement('*'); // Suppresses modal-related test warnings. Used because of Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`"

describe('Modal', () => {
  it('Renders the component', () => {
    render(<Modal isOpen={true} />);
  });

  it('Renders content when isOpen is true', () => {
    render(
      <Modal isOpen={true}>
        <div>modal content</div>
      </Modal>
    );
    screen.getByText('modal content');
  });

  it("Doesn't render content when isOpen is false", () => {
    render(
      <Modal isOpen={false}>
        <div>modal content</div>
      </Modal>
    );
    expect(screen.queryByText('modal content')).not.toBeInTheDocument();
  });
});
