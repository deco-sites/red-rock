export interface Props {
  /**
   * @description The description of name Go.
   */
  capy?: string;
}

export default function SideBarCourse({ capy = "Tuffy" }: Props) {
  return <div>Hello {capy}</div>;
}
