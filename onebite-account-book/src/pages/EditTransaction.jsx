import { useParams } from "react-router-dom";

const EditTransaction = () => {
    const params = useParams();
    return <div>{params.id} : EditTransaction</div>
};

export default EditTransaction;