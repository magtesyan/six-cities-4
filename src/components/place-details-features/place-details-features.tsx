import * as React from "react";

interface Props {
  features: string[];
}

const PlaceDetailsFeatures: React.FunctionComponent<Props> = (props: Props) => {
  const {features} = props;

  const featuresList = features ? features.map((feature) => {
    return (
      <li className="property__inside-item" key={feature}>
        {feature}
      </li>
    );
  }) : ``;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {featuresList}
      </ul>
    </div>
  );
};

export default PlaceDetailsFeatures;
