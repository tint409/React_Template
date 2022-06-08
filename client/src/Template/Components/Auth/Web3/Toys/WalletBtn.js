import React from "react";
import { Button } from "@mui/material";
import { AccountBalanceWallet as AccountBalanceWalletIcon } from "@mui/icons-material";

import { LoginWallet, LogoutWallet } from "../WalletWeb3";
import { PublicContext } from "../../../../Context/Public";

export default function WalletBtn() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);

  const walletClick = async () => {
    setPublicCtx({
      ...publicCtx,
      wallet: publicCtx.wallet.connected
        ? await LogoutWallet()
        : await LoginWallet(),
    });
  };

  return (
    <Button color="inherit" onClick={walletClick}>
      <AccountBalanceWalletIcon sx={{ mr: 1 }} />
      {publicCtx.wallet.connected ? "Logout" : "Login"}
    </Button>
  );
}
