/**
 * @startingPoint section="Permissions" subtitle="Effective permissions across LAMP scopes" viewport="700x300"
 */
export interface PermissionResource {
  key?: string;
  label: string;
  glyph?: string;
  /** LAMP · Genie · Playbook · Agent · Tool · Memory */
  scope?: string;
}
export interface PermissionMatrixProps extends React.TableHTMLAttributes<HTMLTableElement> {
  resources: PermissionResource[];
  /** Column actions — View, Edit, Run, Approve, Go live, Authorize, Stop. */
  actions: string[];
  /** values[resourceKey][action] = 'granted' | 'inherited' | 'denied' | 'overridden' | 'conflict'. */
  values?: Record<string, Record<string, 'granted' | 'inherited' | 'denied' | 'overridden' | 'conflict'>>;
  onToggle?: (resource: PermissionResource, action: string, state: string) => void;
  scopeLabel?: string;
}
export declare const PermissionMatrix: React.ForwardRefExoticComponent<PermissionMatrixProps & React.RefAttributes<HTMLTableElement>>;
export declare function PermissionCell(props: { state?: 'granted' | 'inherited' | 'denied' | 'overridden' | 'conflict'; onClick?: () => void }): JSX.Element;
export interface RoleBadgeProps { role: string; scope?: string }
export declare const RoleBadge: React.ForwardRefExoticComponent<RoleBadgeProps & React.RefAttributes<HTMLSpanElement>>;
