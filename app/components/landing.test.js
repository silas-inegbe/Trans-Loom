import { toast } from 'react-toastify';
import { info } from './landing';

jest.mock('react-toastify', () => ({
    toast: jest.fn(),
}));

describe('info', () => {
    it('should call toast with the correct parameters', () => {
        info();

        expect(toast).toHaveBeenCalledWith("This feature is coming soon", {
            type: "info",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    });
});