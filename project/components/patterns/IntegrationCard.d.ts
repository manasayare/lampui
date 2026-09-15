/**
 * @startingPoint section="Integrations" subtitle="Tool authorization with scopes, usage and health" viewport="700x320"
 */
export interface IntegrationCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  /** Simple Icons slug for the official mark. */
  provider?: string;
  glyph?: string;
  /** Connected account identity. */
  account?: string;
  state?: 'connected' | 'requiresAuth' | 'expired' | 'degraded' | 'error' | 'disabled' | 'available';
  /** Read · Write · Admin · Scoped */
  permission?: string;
  /** Granted scopes in plain language; write scopes are marked. */
  scopes?: Array<{ label: string; write?: boolean; key?: string }>;
  /** Agents, Playbooks or Genies that depend on this Tool. */
  usedBy?: string[];
  health?: string;
  expiry?: string;
  risk?: 'Low' | 'Medium' | 'High';
  onConnect?: () => void;
  onReconnect?: () => void;
  onDisconnect?: () => void;
  onTest?: () => void;
  actions?: React.ReactNode;
}
export declare function IntegrationCard(props: IntegrationCardProps): JSX.Element;
