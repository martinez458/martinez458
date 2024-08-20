import { useMemo } from "react";
import '../css/PieChart.css';

type Props = {
  r: 55;
  strokeWidth: number;
  value: number;
};

export const PieChart = (props: Props) => {
  const { r: outerR, strokeWidth, value } = props;

  /*SVGのwidthとheightとなるサイズ*/
  const size = useMemo(() => {
    return outerR * 2;
  }, [outerR]);

  /*strokeWidthを考慮した半径*/
  const r = useMemo(() => {
    return outerR - strokeWidth / 2;
  }, [outerR, strokeWidth]);

  /*円周*/
  const circumference = useMemo(() => {
    return 2 * Math.PI * r;
  }, [r]);

  return (
    <>
      {
        value > 0 ?
          <div className="pieChart-Area">
            <div className="pieChart-Value">
              <span>
                {props.value.toFixed(2)}%
              </span>
            </div>

            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <circle className="circleAnimation"
                r={r}
                cx={outerR}
                cy={outerR}
                stroke="url('#circle-gradient')"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference * (value / 100)} ${circumference}`}
                transform={`rotate(-90 ${outerR} ${outerR})`}
              />
              <defs>
                  <linearGradient id="circle-gradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#5BB5B3" />
                    <stop offset="1" stopColor="#E92C23" />
                  </linearGradient>
              </defs>
            </svg>
          </div>
        :
          <div className="pieChart-Area">
            <div className="pieChart-Value">
              <span>
                NoData
              </span>
            </div>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <circle
                r={r}
                cx={outerR}
                cy={outerR}
                stroke='#83838354'
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference * (100 / 100)} ${circumference}`}
                transform={`rotate(-90 ${outerR} ${outerR})`}
              />
            </svg>
          </div>
      }
    </>
  );
};