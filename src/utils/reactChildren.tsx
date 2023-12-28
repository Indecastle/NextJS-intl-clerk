import React from 'react';
import { guard } from './guard';

export class ReactChildrenCollection<TProps> {
  private _children: React.ReactNode;
  private _componentType: React.ComponentType<TProps>;

  constructor(
    children: React.ReactNode,
    componentType: React.ComponentType<TProps>,
  ) {
    this._children = guard.notNull(children, 'children');
    this._componentType = guard.notNull(componentType, 'componentType');
  }

  /**
   * Returns props for first matched component
   * @returns first matched component props
   */
  public props(): TProps {
    return this.instances.find((x) => x.type === this._componentType)?.props;
  }

  /**
   * Returns props array for all matched components
   * @returns returns array of props of all matched components
   */
  public propsMany(): TProps[] {
    return this.instances
      .filter((x) => x.type === this._componentType)
      .map((x) => x.props);
  }

  private get instances(): any[] {
    return React.Children.toArray(this._children);
  }
}

/**
 * Wrapper to operate on children property
 */
export class ReactChildren {
  private _children: React.ReactNode;

  private constructor(children: React.ReactNode) {
    this._children = guard.notNull(children, 'children');
  }

  /**
   * Creates new instance of ReactChildren
   * @param children react children property
   * @returns wrapper to operate on children property
   */
  public static of(children: React.ReactNode) {
    return new ReactChildren(children);
  }

  /**
   * Finds components in children propert and returns wrapper
   * @param componentType component type to find
   * @returns wrapper around components found in children
   */
  public find<TProps>(
    componentType: React.ComponentType<TProps>,
  ): ReactChildrenCollection<TProps> {
    componentType = guard.notNull(componentType, 'componentType');
    return new ReactChildrenCollection(this._children, componentType);
  }
}
