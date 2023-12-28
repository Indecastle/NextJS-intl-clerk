import { ItemType } from "antd/es/menu/hooks/useItems";
import { flattenDeep } from "lodash";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

function flattenKeys(items: ItemType[]) {
  const keys: string[] = flattenDeep(
    items.map((x) => [
      x!.key,
      (x as any).children?.map((child: any) => child.key) ?? [],
    ])
  );

  return keys;
}

function isMatch(key: string, pathname: string) {
  return pathname === key || pathname.startsWith(key + "/");
}

export function useSelectedNavMenuKeys(items: ItemType[]) {
  const pathname = usePathname();

  return useMemo(() => {
    const keys = flattenKeys(items);
    const selected = keys.find((x) => isMatch(x, pathname));
    return selected ? [selected] : [];
  }, [pathname, items]);
}
