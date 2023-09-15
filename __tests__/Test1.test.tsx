
import { render, screen } from '@testing-library/react';
import DeleteModal from "../src/app/dashboard/machines/components/DeleteModal";
import MachineForm from '@/app/dashboard/machines/addMachine/components/MachineForm';


it('renders delete modal without errors', () => {
    render(<DeleteModal />);
   
});


