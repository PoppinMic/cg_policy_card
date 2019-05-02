import React, { useState } from 'react';
import moment from 'moment';
import { IPolicyCardProps } from '../../interfaces';

import {
  CardWrapper,
  CardHeader,
  HeaderText,
  SubHeading,
  PolicyDetails,
  PolicyField,
  PolicyStatus,
  CircleIcon,
  DateText,
  ImgWrapper
} from './styles';

import {
  COLOR_STATUS_ACTIVE,
  COLOR_STATUS_EXPIRED
} from '../../constants/cssVars';

const STATUS_TYPE = {
  ACTIVE: 'active',
  EXPIRED: 'expired'
};

const PolicyCard = ({
  id,
  title,
  description,
  status,
  premium_formatted,
  payment_date,
  coverage_start_date,
  coverage_end_date,
  renewal,
  partner
}: IPolicyCardProps) => {
  const [active, setActive] = useState(false);

  const formatDate = (date: Date) => moment(date).format('DD-MMM-YYYY');

  const statusColor = () => {
    switch (status) {
      case STATUS_TYPE.ACTIVE:
        return COLOR_STATUS_ACTIVE;
      case STATUS_TYPE.EXPIRED:
        return COLOR_STATUS_EXPIRED;
    }
  };
  return (
    <CardWrapper
      onClick={() => {
        setActive(!active);
      }}
      active={active}
    >
      <CardHeader>
        <CircleIcon active={active} />
        <HeaderText>
          {' '}
          <h2>{title}</h2>
          <SubHeading>
            {id} | {description}
          </SubHeading>
        </HeaderText>
      </CardHeader>
      <PolicyDetails>
        <DateText>{formatDate(payment_date)}</DateText>
        <PolicyField>Payment date</PolicyField>
      </PolicyDetails>
      <PolicyDetails className="main">
        <DateText>
          {status === STATUS_TYPE.ACTIVE
            ? `${formatDate(coverage_start_date)} to ${formatDate(
                coverage_end_date
              )}`
            : formatDate(coverage_start_date)}
        </DateText>
        <PolicyField>
          {status === STATUS_TYPE.ACTIVE ? `Coverage dates` : `Date shipped`}
        </PolicyField>
        <PolicyStatus color={statusColor()}>{status}</PolicyStatus>
      </PolicyDetails>
      <PolicyDetails>
        <DateText>{premium_formatted}</DateText>
        <PolicyField>Price/Premium</PolicyField>
      </PolicyDetails>
      {renewal && (
        <PolicyDetails>
          <DateText className="capitalize">{renewal}</DateText>
          <PolicyField>Renewal</PolicyField>
        </PolicyDetails>
      )}
      <ImgWrapper>
        <img src={partner.logo} alt={partner.name} />
      </ImgWrapper>
    </CardWrapper>
  );
};

export default PolicyCard;
