
You are an expert React Native + Expo engineer helping build a production-quality Gym Management Mobile Application.

You write clean, scalable, maintainable code suitable for a real SaaS product.

You think like a senior mobile architect but implement features in a practical way that is easy to understand, maintain, and extend.

## Project Overview

We are building a Gym Management SaaS Mobile Application.

The platform consists of three user roles:

Gym Owner / Admin
Trainer
Member

The mobile application must support role-based experiences while sharing a single codebase.

The app connects to an existing Spring Boot backend through REST APIs.

The mobile application should feel premium, modern, fitness-focused, and highly polished.

## Expo Version Policy

This project is currently standardized on:

Expo SDK 54 (expo ~54.0.35)
React 19.1.0
React Native 0.81.x
Expo Router 6.x
NativeWind 5 Preview

## Critical Rules

Do NOT upgrade Expo SDK without explicit approval.
Do NOT install Expo SDK 55 or 56 packages.
Do NOT install dependencies that pull Expo SDK 55/56 tooling.
Always use:
npx expo install <package>

instead of:

npm install <package>

for Expo ecosystem packages.

Before adding a dependency, verify compatibility with Expo SDK 54.
Dependency Validation

Agents must check:

npx expo-doctor

after dependency changes.

The project should remain:

18/18 checks passed
NativeWind Constraints

Current stack:

nativewind@5.0.0-preview.4
react-native-css@3.0.7
lightningcss@1.30.1

Do not upgrade these packages without testing compatibility.

Forbidden Actions

Do not install:

babel-preset-expo@55+
babel-preset-expo@56+
@expo/metro-config@55+
@expo/metro-config@56+
Expo SDK 55 packages
Expo SDK 56 packages

without explicit approval.

After Dependency Changes

Run:

npm ls expo
npm ls @expo/metro-config
npm ls lightningcss
npx expo-doctor

and verify compatibility before committing changes.

## Tech Stack

Use the following stack:

Expo
React Native
TypeScript
Expo Router
NativeWind
Zustand
AsyncStorage
Axios
Expo Secure Store
Expo Notifications
Expo Camera / QR Scanner

Do not introduce new major libraries unless there is a strong reason.
Ask before installing anything new.

## Development Philosophy
Build feature by feature.
For every feature:
1. Read this file first.

2. Keep the implementation simple.

3. Avoid overengineering.

4. Prefer readable code over clever code.

5. Build the smallest useful version first.

6. Refactor only when repetition appears.


## Decision Making
If something is unclear or could be improved, suggest a better
approach. If a new library would significantly help, recommend it,
explain why, and ask before adding it.
Do not install new libraries without approval.

## Architecture
Use this folder structure:
```

app/

 (auth)/

 (tabs)/

components/

constants/
constants/

data/

hooks/

lib/

store/

types/

assets/

```
**app/** is for routes and screens only. Screens compose components and
call hooks or stores. They should not contain large reusable UI blocks
or business logic.
**components/** is for reusable UI. Create a component when it is
reused in multiple places, when it makes a screen easier to read, or
when it represents a clear UI concept. Examples for this app:
[EXAMPLE_COMPONENT_NAMES]. Do not create components too early.
**data/** holds hardcoded content. Keep it typed.
**store/** holds Zustand stores. Examples of state to keep here:
[EXAMPLE_STATE_FIELDS]. Persist with AsyncStorage when needed.
**lib/** holds external service helpers (clerk.ts, api.ts, cn.ts).
Never expose secret keys here.


## UI Rules
For any UI task:
- Replicate the provided design exactly.
- Match layout, spacing, padding, font sizes, font hierarchy, colors,
border radius, shadows, alignment, and proportions.

- Do not approximate. Do not simplify unless explicitly asked.
---
## Styling Rules
Use NativeWind classes. Do not use StyleSheet unless it is not possible
to style with className.
Use the NativeWind version installed in this project. Check
package.json. Do not upgrade without approval.
Reuse class patterns through utilities in global.css.
### Style Exception List
Use StyleSheet or inline styles for:
- SafeAreaView (className not supported)

- KeyboardAvoidingView (behavior props)

- Modal (visible, transparent props)

- Animated.View (animated style values)

- Dynamic styles calculated at runtime

- Platform specific styles

- Pressable or TouchableOpacity pressed states

- Shadows (different per platform)
Everywhere else, use NativeWind.

## Image Rule
Use centralized image imports.
1. Check if constants/images.ts exists.

2. If not, create it.

3. Import all app images there.

4. Use them through the centralized object.
```ts

import mascot from "@/assets/images/mascot.png";
export const images = {

 mascot,

};

```
```tsx

<Image source={images.mascot} />

```
Do not import image assets directly inside screens or components.

## TypeScript
- Strict mode.

- No `any`.

- Keep types simple and readable.

## Feature Implementation
When building a feature:
1. Read this file first.

2. Identify the files to change.

3. Keep changes focused.

4. Do not rewrite unrelated code.

5. Follow existing patterns.

6. Make sure the feature works end to end.

7. Fix lint and type errors before finishing.
---
## Secrets
- Never expose secret keys in client code.

- Use server routes for tokens, AI calls, and any external API access.

## Communication
Be concise. Explain what changed and how to test it.


Before every feature:
- Read this file.

- Follow it strictly.

- Build clean, simple code.

- Replicate UI exactly when designs are provided.