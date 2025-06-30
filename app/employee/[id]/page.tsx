'use client';

import { useParams, useRouter } from 'next/navigation';
import { useUserStore } from '@/store/useUserStore';

export default function EmployeePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const user = useUserStore((s) =>
    s.users.find((u) => u.id === Number(id))
  );

  if (!user) {
    return (
      <main className="p-4">
        <p className="text-red-500">User not found – return to dashboard.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-2 px-3 py-1 border rounded"
        >
          Back
        </button>
      </main>
    );
  }

  return (
    <main className="space-y-4">
      <h2 className="text-xl font-bold">
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Department: {user.department}</p>
      <p>Rating: ⭐ {user.rating} / 5</p>

      <section className="border-t pt-4">
        <h3 className="font-semibold mb-1">Overview</h3>
        <p>
          {user.firstName} works in {user.department}. Current performance
          rating is {user.rating}/5.
        </p>
      </section>
    </main>
  );
}
