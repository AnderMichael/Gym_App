
import { render, screen } from '@testing-library/react';
import DeleteModal from "../src/app/dashboard/machines/components/DeleteModal";
import MachineForm from '@/app/dashboard/machines/addMachine/components/MachineForm';
import MachineFormEdit from '@/app/dashboard/machines/editMachine/components/MachineFormEdit';




it('renders delete modal without errors', () => {
    render(<DeleteModal />);
   
});


