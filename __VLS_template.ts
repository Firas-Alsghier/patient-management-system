import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './app.vue';

function __VLS_template() {
	let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
	/* Components */
	let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
	let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
	let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
	let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
	/* Style Scoped */
	type __VLS_StyleScopedClasses = {};
	let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
	/* CSS variable injection */
	/* CSS variable injection end */
	let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<'NuxtPage', typeof __VLS_localComponents, 'NuxtPage', 'NuxtPage', 'NuxtPage'>;
	__VLS_intrinsicElements.button;
	__VLS_intrinsicElements.button;
	__VLS_components.NuxtPage;
	// @ts-ignore
	[NuxtPage];
	{
		const __VLS_0 = __VLS_intrinsicElements['button'];
		const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
		const __VLS_2 = __VLS_1({ ...{}, class: 'btn btn-accent' }, ...__VLS_functionalComponentArgsRest(__VLS_1));
		(({}) as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: 'btn btn-accent' });
		const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
		let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
		__VLS_3.slots!.default;
	}
	{
		const __VLS_5 = ({} as 'NuxtPage' extends keyof typeof __VLS_ctx ? { NuxtPage: typeof __VLS_ctx.NuxtPage } : typeof __VLS_resolvedLocalAndGlobalComponents).NuxtPage;
		const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{} }));
		(({}) as { NuxtPage: typeof __VLS_5 }).NuxtPage;
		const __VLS_7 = __VLS_6({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_6));
		(({}) as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{} });
		const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
		let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
	}
	if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
	}
	var __VLS_slots!: {};
	return __VLS_slots;
}
