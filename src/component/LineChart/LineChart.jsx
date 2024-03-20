import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { studentId: 1, name: "John Doe", math: 85, physics: 78, chemistry: 90 },
        { studentId: 2, name: "Jane Smith", math: 70, physics: 82, chemistry: 75 },
        { studentId: 3, name: "Michael Johnson", math: 95, physics: 88, chemistry: 92 },
        { studentId: 4, name: "Emily Brown", math: 60, physics: 65, chemistry: 70 },
        { studentId: 5, name: "David Wilson", math: 80, physics: 75, chemistry: 85 },
        { studentId: 6, name: "Emma Martinez", math: 72, physics: 68, chemistry: 78 },
        { studentId: 7, name: "Oliver Taylor", math: 88, physics: 82, chemistry: 90 },
        { studentId: 8, name: "Sophia Lee", math: 78, physics: 72, chemistry: 80 },
        { studentId: 9, name: "William Anderson", math: 92, physics: 85, chemistry: 88 },
        { studentId: 10, name: "Ava Garcia", math: 85, physics: 78, chemistry: 90 }
      ];      

    return (
        <div className='my-10'>
            <LChart width={900} height={300} data={studentMarks}>
                <XAxis dataKey={'name'} />
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math" stroke='red'></Line>
                <Line type={"monotone"} dataKey={"chemistry"} stroke={'purple'}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;