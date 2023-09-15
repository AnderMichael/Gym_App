import { render, screen } from '@testing-library/react';
import Image from 'next/image';
import MachineForm from '@/app/dashboard/machines/addMachine/components/MachineForm';
import sadMichi from "../../../assets/sadMichi2.png";



it('should render image without errors', () => {
    render(<Image src={sadMichi} alt={":c"}  />);
   
});