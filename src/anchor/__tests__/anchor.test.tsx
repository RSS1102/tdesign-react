import React from 'react';
import { render, fireEvent, vi, waitFor } from '@test/utils';
import Anchor from '../Anchor';
import { getScroll } from '../_util/dom';

const { AnchorItem, AnchorTarget } = Anchor;

describe('Anchor 组件测试', () => {
  const distance = 0;
  const childTestID = 'childTestID';

  describe('props:', () => {
    test('className and style', () => {
      const anchorRender = render(
        <Anchor className="custom-anchor-test" style={{ color: 'red' }}>
          <AnchorItem href="#test-a" />
          <AnchorItem href="#test-b" />
        </Anchor>,
      );
      const { container } = anchorRender;
      const anchor = container.querySelector('.t-anchor');
      expect(anchor).toHaveClass('custom-anchor-test');
      expect(anchor).toHaveStyle('color: red');
    });

    test('affixProps: offsetTop and test affix', async () => {
      const anchorRender = render(
        <div>
          <div id="test-a" style={{ height: '500px' }}>
            test-a
          </div>
          <Anchor affixProps={{ offsetTop: 150 }}>
            <AnchorItem href="#test-a" />
          </Anchor>
          ,
        </div>,
      );

      const { container } = anchorRender;
      await waitFor(() => {
        const anchor = container.querySelector('.t-affix');
        expect(anchor).not.toBeNull();
        expect(anchor).toHaveStyle('top: 150px');
      });
    });

    // todo: bounds

    test('render AnchorItem links', async () => {
      render(
        <Anchor>
          <AnchorItem href="#test-a" />
          <AnchorItem href="#test-b" />
        </Anchor>,
      );
      expect(document.querySelector('.t-is-active')).toBe(null);
      expect(document.querySelector('a[href="#test-a"]')).not.toBe(null);
      expect(document.querySelector('a[href="#test-b"]')).not.toBe(null);
    });

    test('render AnchorTarget tag', async () => {
      const wrapper = render(
        <div data-testid={childTestID}>
          <AnchorTarget id="default" tag="h1">
            基础锚点
          </AnchorTarget>
        </div>,
      );
      const { container } = wrapper;
      const anchorItem = wrapper.getByTestId(childTestID);
      expect(anchorItem).not.toBeNull();
      fireEvent.mouseDown(container.querySelector('#default'));
      const icon = container.querySelector('.t-anchor__copy');
      fireEvent.click(icon);
      expect(icon).not.toBeNull();
    });
  });

  describe('function:', () => {
    test('Anchor 工具函数 getScroll', () => {
      const wrapper = render(
        <Anchor targetOffset={150}>
          <AnchorItem href="#基础锚点" title="基础锚点" data-testid={childTestID} />
        </Anchor>,
      );

      // target is element
      const domDistance = getScroll(wrapper.getByTestId(childTestID), true);
      expect(domDistance).toEqual(distance);

      // target is document
      const documentDistance = getScroll(document, true);
      expect(documentDistance).toEqual(distance);

      // target is window
      const windowDistance = getScroll(window, true);
      expect(windowDistance).toEqual(distance);
    });

    test('render Anchor click', async () => {
      const fn = vi.fn();
      const wrapper = render(
        <div>
          <Anchor targetOffset={150} onClick={fn}>
            <AnchorItem href="#test-a" />
            <AnchorItem href="#test-b" />
            <AnchorItem href="#test-c" title="基础锚点" data-testid={childTestID} />
          </Anchor>
          <div id="test-c"></div>
        </div>,
      );
      const anchorItem = wrapper.getByTestId(childTestID);
      fireEvent.click(anchorItem.firstChild);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });
});
