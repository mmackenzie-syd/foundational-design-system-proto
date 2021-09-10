import type {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import {
  getBreakpointTokens,
  getColorTokens,
  getMotionTokens,
  getSpacingTokens,
} from '../../packages/functions';
import {TokenValue} from '../../packages/functions/types';
import {ALLOWED_ENDPOINTS} from './api/[endpoint]';

const Home: NextPage = () => {
  const colorTokens = getColorTokens();
  const spacingTokens = getSpacingTokens({multiple: 1});
  const motionTokens = getMotionTokens();
  const breakPointTokens = getBreakpointTokens();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>WIP Tokens</h1>
      <p>These tokens can also be fetched through the API:</p>
      <ul>
        {ALLOWED_ENDPOINTS.map((endpoint) => (
          <li key={endpoint}>
            <a href={`api/${endpoint}`}>{endpoint}</a>
          </li>
        ))}
      </ul>
      <h2>Color tokens</h2>
      {Object.entries(colorTokens).map(([key, value]) => {
        return (
          <TokenRow
            key={key}
            name={key}
            value={value.value}
            description={value.description}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
                background: value.value,
              }}
            ></div>
          </TokenRow>
        );
      })}

      <h2>Spacing tokens</h2>
      {Object.entries(spacingTokens).map(([key, value]) => {
        return (
          <TokenRow
            key={key}
            name={key}
            value={value.value}
            description={value.description}
          >
            <div
              style={{
                width: 30,
                height: value.value,
                background: `rgba(255,255,255,.1)`,
                boxShadow: `inset 0 -1.5px white, inset 0 1.5px white`,
              }}
            ></div>
          </TokenRow>
        );
      })}

      <h2>Motion tokens</h2>
      {Object.entries(motionTokens).map(([key, value]) => {
        return (
          <TokenRow
            key={key}
            name={key}
            value={value.value}
            description={value.description}
          >
            ...
          </TokenRow>
        );
      })}

      <h2>Breakpoint tokens</h2>
      {Object.entries(breakPointTokens).map(([key, value]) => {
        return (
          <TokenRow
            key={key}
            name={key}
            value={value.value}
            description={value.description}
          >
            ...
          </TokenRow>
        );
      })}
    </div>
  );
};

const TokenRow = ({
  name,
  value,
  description,
  children,
}: {
  name: string;
  value: TokenValue;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="token-row">
      <div className="token-row__preview">{children}</div>
      <div className="token-row__meta">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="token-row__value">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Home;
