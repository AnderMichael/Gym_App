import setCorrectDate from "@/helpers/dateCorrector";
import { EyeIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
interface TableApp {
  color: string;
  shadow: string;
  columns: Array<string>;
  dataRow: Array<string>;
  rows: any;
  handleEdit: any;
  handleView: any;
  promptToDelete: any;
}
const Table = (props: TableApp) => {
  console.log(props);

  const theadClass = `${props.color} text-white font-bold font-jost text-2xl`;
  const trClass = `${props.shadow} text-center font-normal font-jost`;
  //{ color,  shadow, columns, rows, handleEdit, handleView, promptToDelete } = props

  const dataTreatment = (dataName: string, employeeData: any) => {
    switch (dataName) {
      case "createdDate":
        return setCorrectDate(employeeData);
      case "needMaintenance":
        return employeeData ? "Requiere" : "No requiere";
      default:
        return employeeData;
    }
  };

  return (
    <div className="overflow-x-auto mb-4 rounded-xl shadow-lg shadow-[#C0C0C0]">
      <table className="w-full table-auto">
        <thead className={theadClass}>
          <tr>
            {props.columns.map((title: string) => (
              <th className="p-4">{title}</th>
            ))}

            <th colSpan={3} />
          </tr>
        </thead>
        <tbody>
          {props.rows.map((employee: any, index: number) => (
            <tr
              key={employee.id}
              className={
                index % 2 === 0
                  ? trClass
                  : "bg-white text-center font-normal font-jost"
              }
            >
              {props.dataRow.map((data: any) => (
                <td className="text-black px-4 py-2">
                  {dataTreatment(data, employee[data])}
                </td>
              ))}

              <td className="text-black px-4 py-2">
                <button onClick={() => props.handleView(employee)}>
                  <EyeIcon className="h-7 w-10 border-spacing-1 text-[#223A6B] hover:text-[#5769a5]" />
                </button>
              </td>
              <td className="text-black   px-4 py-2">
                <button onClick={() => props.handleEdit(employee)}>
                  <PencilAltIcon className="h-7 w-7 text-[#1A4E1C] hover:text-[#447646]" />
                </button>
              </td>
              <td className="text-black   px-4 py-2">
                <button onClick={() => props.promptToDelete(employee)}>
                  <TrashIcon className="h-7 w-7 text-[#CE0A0B] hover:text-[#e92626] font-thin" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
