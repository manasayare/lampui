The Tool: a 6px-radius square, neutral surface, provider mark inside. A Gmail tile is never red and a Salesforce tile is never blue — brand colour lives in the glyph only.

```jsx
<ToolTile provider="salesforce" name="Salesforce" state="connected" />
<ToolRow provider="sap" name="SAP" account="finance@northwind.com" state="authorizationRequired" permission="Write" usedBy={4} health="99.2%" risk="High" />
```

ToolRow is the directory/health/authorization row: account, permission level, who uses it, last activity, health and risk.
