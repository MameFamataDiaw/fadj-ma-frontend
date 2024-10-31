'use client';
import { useParams } from 'next/navigation';
import MedicamentDetailsForm from '../../../../component/Medicament/DetailsForm';

export default function AddDetailsPage() {
    const params = useParams();
    const medicamentId = params.id as string;

    return <MedicamentDetailsForm medicamentId={medicamentId} />;
}