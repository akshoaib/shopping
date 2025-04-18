import { Col, Row, Skeleton } from "antd";

const ProductCategoriesSkeleton = () => {
  return (
    <Row className="w-100 justify-content-between">
      <Col span={8} className="">
        <Skeleton.Image className="rounded-circle" />
        <p>
          {" "}
          <Skeleton />
        </p>
      </Col>
      <Col span={8}>
        <Skeleton.Image className="rounded-circle" />
        <Skeleton />
      </Col>
      <Col span={8}>
        <Skeleton.Image className="rounded-circle" />
        <Skeleton />
      </Col>
    </Row>
  );
};

export default ProductCategoriesSkeleton;
