import { Segmented } from "antd";
import { SegmentedValue } from "antd/es/segmented";
import { ReactElement } from "react";

const Segment: React.FC<{ onChange: (segment: SegmentedValue) => void }> = ({ onChange }: { onChange: (segment: SegmentedValue) => void }): ReactElement => (
  <Segmented options={['Popular', 'Upcoming', 'Top rated']} onChange={(e: SegmentedValue) => onChange(e)} />
);

export default Segment