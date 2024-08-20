import '../../css/sample/Carousel.css'

type Props = {
  headName: string,
  rows: number,
}

export const CarouselTable = (props: Props) => {

  let tdArray = Array(props.rows);
  for (let i = 0; i < tdArray.length; i++) {
    tdArray[i] = i;
  }

  return (
    <table border={1} className="carousel-table">
      <thead>
        <tr>
          <th>{props.headName}1</th>
          <th>{props.headName}2</th>
          <th>{props.headName}3</th>
        </tr>
      </thead>
      <tbody>
        {tdArray.map((num, index) => 
          <tr key={index}>
            <td>td1-{num}</td>
            <td>td2-{num}</td>
            <td>td3-{num}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}